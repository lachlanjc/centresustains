import { useState, useEffect } from 'react'
import {
  Alert,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  IconButton,
  Input,
  Label,
  Spinner,
  Text
} from 'theme-ui'
import { useRouter } from 'next/router'
import {
  ExclamationTriangleFill,
  CheckCircleFill,
  ArrowRepeat
} from 'react-bootstrap-icons'
import Avatar from './avatar'

const Loading = () => (
  <Spinner
    size={24}
    color="currentColor"
    sx={{ margin: '0 !important', textAlign: 'center', minWidth: '52px' }}
  />
)

const Signup = () => {
  const { pathname } = useRouter()
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (localStorage) {
      const address = localStorage.getItem('emailSubscribed')
      if (address) {
        setEmail(address)
        setDone(true)
      }
    }
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    if (email.length < 3) return
    setSubmitting(true)
    let submission = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, timestamp: new Date() }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (submission.ok) {
      localStorage.setItem('emailSubscribed', email)
      setEmail('')
      setSubmitting(false)
      setDone(true)
    } else {
      setSubmitting(false)
      setError(submission.errors || 'Something went wrong.')
    }
  }

  return (
    <Card
      sx={{
        border: '1px solid',
        borderColor: 'border',
        maxWidth: 'narrowPlus',
        mx: 'auto',
        mt: [3, 4],
        mb: [4, 5]
      }}
    >
      <Heading
        as="h2"
        variant="subheadline"
        color={done ? 'text' : 'primary'}
        mt={0}
      >
        Get an email when{' '}
        {pathname === '/forum' ? 'event registration' : 'the survey'} opens
      </Heading>
      {done ? (
        <Grid
          gap={2}
          columns="auto 1fr auto"
          sx={{ color: 'green', fontSize: 3, alignItems: 'center' }}
        >
          <CheckCircleFill />
          <Text sx={{ fontSize: 2 }}>
            <strong>Signed up!</strong> ({email})
          </Text>
          <IconButton
            onClick={() => setDone(false)}
            sx={{ color: 'secondary', fontSize: 4 }}
          >
            <ArrowRepeat />
          </IconButton>
        </Grid>
      ) : (
        <Grid
          as="form"
          onSubmit={onSubmit}
          gap={[2, 3]}
          columns="1fr auto"
          sx={{
            mt: [null, 3],
            gridTemplateColumns: '1fr auto',
            textAlign: 'left',
            alignItems: 'end',
            input: { bg: 'sunken' }
          }}
        >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="me@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" sx={{ bg: 'azure', mt: [2, 0] }}>
            {submitting ? <Loading /> : 'Sign up'}
          </Button>
        </Grid>
      )}
      {error && (
        <Alert variant="primary" sx={{ mt: [2, 3] }}>
          <ExclamationTriangleFill />
          <Text sx={{ ml: 2 }}>
            {error.toString()}
            <Text as="a" color="inherit" pl={1} href="mailto:padams@crcog.net">
              Email Pam?
            </Text>
          </Text>
        </Alert>
      )}
      {!done &&
        !error && (
          <Flex
            as="footer"
            sx={{
              mt: 3,
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Avatar
              size={48}
              alt="Pam's avatar"
              src="/tag/pam_adams.jpg"
              sx={{ pr: 2 }}
            />
            <Text as="p" variant="caption" pt={[2, 0]}>
              I’ll send you 4 emails between now & April, unsubscribe any time.
              <br />
              I’d love to have you involved. <strong>—Pam</strong>
            </Text>
          </Flex>
        )}
    </Card>
  )
}

export default Signup
