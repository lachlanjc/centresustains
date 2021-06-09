import { useColorMode, Box, Text } from 'theme-ui'
import Image from 'next/image'

const Photo = ({ src, width, height, alt, showAlt = true, ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Box
      {...props}
      as="figure"
      sx={{
        boxShadow: 'elevated',
        borderRadius: 'extra',
        position: 'relative',
        maxWidth: '100%',
        lineHeight: 0,
        overflow: 'hidden',
        height: 'fit-content',
        ...props.sx
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
      />
      {showAlt && alt && (
        <Text
          as="figcaption"
          variant={'cards.translucent' + (colorMode === 'dark' ? 'Dark' : '')}
          children={alt}
          sx={{
            display: 'block',
            fontSize: 1,
            lineHeight: 'body',
            pt: 2,
            px: 3,
            position: 'absolute',
            bottom: 0,
            height: 'fit-content',
            borderRadius: `0 0 ${theme.radii.extra}px ${theme.radii.extra}px`,
            width: '100%',
            maxWidth: '100%',
            zIndex: 1
          }}
        />
      )}
    </Box>
  )
}

export default Photo
