import { Box, styled } from '@mui/material'
import backgroundImage from 'assets/header-background.png'
import { TypographyWithoutNormalLineHeight } from 'components/typography'
import { format } from 'date-fns'
import { useState } from 'react'
import { useInterval } from 'react-use'

const HeaderBackgroundWrapperSt = styled(Box)(() => ({
  height: '202px',
  position: 'relative',
}))

const HeaderBackgroundSt = styled(Box)(() => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  height: '100%',
}))

const HeaderBackgroundContentWrapperSt = styled(Box)(() => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
}))

const HeaderBackgroundContentSt = styled(Box)(() => ({
  textAlign: 'right',
  paddingRight: '28px',
  paddingBottom: '13px',
}))

export const Header = () => {
  const [date, setDate] = useState<Date>(new Date())
  const atDay = format(date, 'E d')
  const atTime = format(date, 'H:mm a')

  useInterval(() => {
    setDate(new Date())
  }, 1000)

  return (
    <HeaderBackgroundWrapperSt>
      <HeaderBackgroundSt />
      <HeaderBackgroundContentWrapperSt>
        <HeaderBackgroundContentSt>
          <TypographyWithoutNormalLineHeight
            sx={{
              fontFamily: 'Russo One',
              fontSize: 18,
              color: 'white',
            }}
          >
            {atDay}
          </TypographyWithoutNormalLineHeight>
          <TypographyWithoutNormalLineHeight
            sx={{
              fontFamily: 'Russo One',
              fontSize: 48,
              color: 'white',
            }}
          >
            {atTime}
          </TypographyWithoutNormalLineHeight>
        </HeaderBackgroundContentSt>
      </HeaderBackgroundContentWrapperSt>
    </HeaderBackgroundWrapperSt>
  )
}
