"use client"

import { SegmentGroup } from "@chakra-ui/react"
import { useState } from "react"

const Type = () => {
  const [value, setValue] = useState("React")
  return (
    <SegmentGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
    </SegmentGroup.Root>
  )
}

export default Type