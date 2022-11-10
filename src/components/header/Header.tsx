import { Box, styled } from '@mui/material'
import backgroundImage from 'assets/header-background.png'
import { TypographyWithoutNormalLineHeight } from 'components/typography'

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
            Thur 9
          </TypographyWithoutNormalLineHeight>
          <TypographyWithoutNormalLineHeight
            sx={{
              fontFamily: 'Russo One',
              fontSize: 48,
              color: 'white',
            }}
          >
            6:23 AM
          </TypographyWithoutNormalLineHeight>
        </HeaderBackgroundContentSt>
      </HeaderBackgroundContentWrapperSt>
    </HeaderBackgroundWrapperSt>
  )
}
