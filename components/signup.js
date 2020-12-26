import { useState } from 'react'
import {
  Card,
  Heading,
  Text,
  Grid,
  Label,
  Input,
  Button,
  Spinner,
  Alert
} from 'theme-ui'
import { Mailbox2, ExclamationTriangle } from 'react-bootstrap-icons'

const Loading = () => (
  <Spinner
    size={24}
    color="currentColor"
    sx={{ margin: '0 !important', textAlign: 'center', minWidth: '52px' }}
  />
)

const Signup = () => {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    if (email.length < 3) return
    setSubmitting(true)
    let submission = await fetch(
      '/api/signup',
      {
        method: 'POST',
        body: JSON.stringify({ email, timestamp: new Date() }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    if (submission.ok) {
      setEmail('')
      setSubmitting(false)
      setDone(true)
    } else {
      setSubmitting(false)
      setError(submission.errors || 'Something went wrong')
    }
  }
  return (
    <Card variant="sunken" sx={{ maxWidth: 'narrowPlus', mx: 'auto', my: [3, 4] }}>
      <Heading as="h2" variant="subheadline" color="primary">
        Get an email when event registration opens
      </Heading>
      <Grid
        as="form"
        onSubmit={onSubmit}
        gap={[2, 3]}
        sx={{
          mt: [null, 3],
          gridTemplateColumns: [null, '1fr auto'],
          textAlign: 'left',
          alignItems: 'end',
          input: { bg: 'elevated' }
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" sx={{ mt: [2, 0] }}>
          {submitting ? <Loading /> : 'Sign up'}
        </Button>
      </Grid>
      {error && (
        <Alert variant="primary" sx={{ mt: [2, 3] }}>
          <ExclamationTriangle />
          <Text sx={{ ml: 2 }}>
            {error.toString()}
          </Text>
        </Alert>
      )}
      {done && (
        <Alert variant="primary" sx={{ bg: 'green', mt: [2, 3] }}>
          <Mailbox2 />
          <Text sx={{ ml: 2 }}>Signed up!</Text>
        </Alert>
      )}
      {!done && !error && (
        <Text as="p" variant="caption" mt={2}>No unrelated emails, no spam, no ads.</Text>
      )}
    </Card>
  )
}

export default Signup