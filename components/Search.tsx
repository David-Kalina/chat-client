/* eslint-disable react/no-children-prop */
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'
import React from 'react'

function Search() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<FaSearch />} />
      <Input type="tel" placeholder="Phone number" />
    </InputGroup>
  )
}

export default Search
