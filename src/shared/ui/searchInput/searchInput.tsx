/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Spotlight, spotlight, SpotlightActionData } from '@mantine/spotlight'
import { AnyObject } from 'yup'

import { SavedColors } from '@shared/constants'
import { TotalData, TotalDataItem } from '@shared/constants/allTexts'
import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'

import { TextResponsive } from '../Typography'

interface SearchResult extends TotalDataItem {
  score: number
  matchedText: string
}

const SearchInput = () => {
  const { navigateAndScroll } = useNavigationScroll()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const isMobile = useMediaQuery('(max-width: 760px)')

  const searchInValue = (
    value: AnyObject | string,
    searchTerm: string,
  ): boolean => {
    if (!value) return false

    const lowerTerm = searchTerm.toLowerCase()

    if (typeof value === 'string') {
      return value.toLowerCase().includes(lowerTerm)
    }

    if (Array.isArray(value)) {
      return value.some((item) => searchInValue(item, searchTerm))
    }

    if (typeof value === 'object') {
      return Object.values(value).some((val) => searchInValue(val, searchTerm))
    }

    return false
  }

  const findMatchedText = (item: AnyObject, searchTerm: string): string => {
    if (!searchTerm) {
      return item.description || item.name || item.title || ''
    }

    const lowerTerm = searchTerm.toLowerCase()

    const matches = (value?: string): boolean =>
      typeof value === 'string' && value.toLowerCase().includes(lowerTerm)

    // Top-level text fields
    if (matches(item.name)) return item.name
    if (matches(item.title)) return item.title
    if (matches(item.dTitle)) return item.dTitle
    if (matches(item.description)) return item.description
    if (matches(item.overview)) return item.overview
    if (matches(item.descriptionSecond)) return item.descriptionSecond

    // Features
    if (Array.isArray(item.features)) {
      for (const feature of item.features) {
        if (typeof feature === 'object' && feature !== null) {
          if (matches(feature.name)) return feature.name
          if (matches(feature.description)) return feature.description

          if (Array.isArray(feature.features)) {
            for (const nested of feature.features) {
              if (typeof nested === 'string' && matches(nested)) return nested
            }
          }
        } else if (typeof feature === 'string' && matches(feature)) {
          return feature
        }
      }
    }

    // Best For
    if (Array.isArray(item.bestFor)) {
      for (const entry of item.bestFor) {
        if (
          typeof entry === 'object' &&
          entry !== null &&
          matches(entry.label)
        ) {
          return entry.label
        }
        if (typeof entry === 'string' && matches(entry)) {
          return entry
        }
      }
    }

    // Editions
    if (Array.isArray(item.editions)) {
      for (const edition of item.editions) {
        if (typeof edition === 'object' && edition !== null) {
          if (matches(edition.name)) return edition.name
          if (matches(edition.description)) return edition.description
          if (matches(edition.bestFor)) return edition.bestFor

          if (Array.isArray(edition.features)) {
            for (const feat of edition.features) {
              if (matches(feat.name)) return feat.name
            }
          }
        } else if (typeof edition === 'string' && matches(edition)) {
          return edition
        }
      }
    }

    // Sections
    const checkSections = (sections?: AnyObject[]) => {
      if (!Array.isArray(sections)) return false
      for (const section of sections) {
        if (typeof section === 'object' && section !== null) {
          if (matches(section.name)) return section.name
          if (matches(section.description)) return section.description
        }
      }
      return false
    }

    const sectionMatch =
      checkSections(item.section) || checkSections(item.sectionSecond)
    if (sectionMatch) return sectionMatch as string

    // Simple string arrays
    const checkStringArray = (arr?: unknown[]): string | false => {
      if (!Array.isArray(arr)) return false
      for (const value of arr) {
        if (typeof value === 'string' && matches(value)) return value
      }
      return false
    }

    const arrayMatch =
      checkStringArray(item.industries) || checkStringArray(item.deployment)
    if (arrayMatch) return arrayMatch

    return item.description || item.name || item.title || ''
  }

  const getTruncatedText = (
    text: string,
    searchTerm: string,
    maxLength = 80,
  ): string => {
    if (!searchTerm.trim()) {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
    }

    const lowerText = text.toLowerCase()
    const lowerTerm = searchTerm.toLowerCase()

    const matchIndex = lowerText.indexOf(lowerTerm)
    if (matchIndex === -1) {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
    }

    const termLength = searchTerm.length
    const preferredContextBefore = Math.floor((maxLength - termLength) / 2)
    const preferredContextAfter =
      maxLength - termLength - preferredContextBefore

    let start = Math.max(0, matchIndex - preferredContextBefore)
    let end = Math.min(
      text.length,
      matchIndex + termLength + preferredContextAfter,
    )

    if (end - start < maxLength) {
      const missing = maxLength - (end - start)
      if (start >= missing) {
        start -= missing
      } else {
        end += missing - start
        start = 0
      }
    }

    start = Math.max(0, start)
    end = Math.min(text.length, end)

    const prefix = start > 0 ? '...' : ''
    const suffix = end < text.length ? '...' : ''

    return prefix + text.slice(start, end) + suffix
  }

  const handleSearch = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) {
      return []
    }

    const lowerCaseTerm = searchQuery.toLowerCase()

    const filteredResults = TotalData.map((item) => {
      let score = 0

      Object.entries(item).forEach(([key, value]) => {
        if (searchInValue(value, lowerCaseTerm)) {
          if (key === 'name') {
            score += 12
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm)
              score -= Math.min(position * 0.01, 5)
            }
          } else if (key === 'title') {
            score += 10
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm)
              score -= Math.min(position * 0.01, 5)
            }
          } else if (key === 'description' || key === 'descriptionSecond') {
            score += 5
            if (typeof value === 'string') {
              const position = value.toLowerCase().indexOf(lowerCaseTerm)
              score -= Math.min(position * 0.001, 3)
            }
          } else {
            score += 2
          }
        }
      })

      const matchedText = findMatchedText(item, searchQuery)
      return { ...item, score, matchedText }
    })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)

    return filteredResults
  }

  const handleResultClick = (result: SearchResult) => {
    spotlight.close()

    if (!result.sectionId) {
      navigate(result.target)
      return
    }
    navigateAndScroll('/', result.sectionId)
  }

  const actions: SpotlightActionData[] = useMemo(() => {
    const results = handleSearch(query)
    return results.map((result) => ({
      id: result.name || result.title || '',
      label: result.name || result.title || '',
      description: getTruncatedText(result.matchedText, query),
      onClick: () => handleResultClick(result),
    }))
  }, [query])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        spotlight.open()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <>
      <Spotlight
        actions={actions}
        query={query}
        onQueryChange={setQuery}
        searchProps={{
          leftSection: <FaSearch size={20} />,
          placeholder: 'Search by keyword...',
        }}
        nothingFound="No results found"
        highlightQuery
        limit={10}
        shortcut={['mod + K']}
        scrollable
      />
      <Button
        onClick={() => spotlight.open()}
        variant="outline"
        radius={10}
        leftSection={
          <FaSearch
            size={16}
            color={SavedColors.TextColor}
          />
        }
        color={SavedColors.TextColor}
        rightSection={
          <Container
            p={5}
            style={{ borderRadius: '5px', border: '1px solid lightgray' }}
          >
            <TextResponsive fontSize="12px">Ctrl + K</TextResponsive>
          </Container>
        }
      >
        <Flex
          gap={10}
          w={isMobile ? '65vw' : '25vw'}
        >
          <TextResponsive color={SavedColors.TextColor}>Search</TextResponsive>
        </Flex>
      </Button>
    </>
  )
}

export { SearchInput }
