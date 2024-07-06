# ERD Notes for Dad Jokes

## Users Table
**Columns:**
- id
- username
- email
- password
- created_at
- updated_at

## Jokes
- id
- setup
- punchline
- user_id
- created_at
- updated_at

## Groans
- id
- user_id
- joke_id
- created_at
- updated_at