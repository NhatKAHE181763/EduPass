# EduPass

EduPass is a Rails 8 application scaffold with authentication, authorization, pagination,
search, background jobs, and cloud storage configured.

## Requirements

- Ruby 3.3.5 (rbenv)
- Bundler
- PostgreSQL 13+

## Setup

1. Install gems:

```bash
bundle install
```

2. Update the local environment file:

Edit `.env` with your PostgreSQL, Cloudinary, Stripe, and JWT values.
If your local Postgres requires a password, set `POSTGRES_PASSWORD`.

3. Create and prepare the databases:

```bash
bin/rails db:prepare
bin/rails db:test:prepare
```

4. Start the app:

```bash
bin/rails server
```

## Credentials (production)

Store secrets in credentials:

```bash
bin/rails credentials:edit
```

Example keys:

```yaml
devise:
	jwt_secret_key: your-jwt-secret
stripe:
	secret_key: sk_live_...
```

## Background jobs (Solid Queue)

Run the job processor:

```bash
bin/jobs
```

Or run inside Puma:

```bash
SOLID_QUEUE_IN_PUMA=1 bin/rails server
```

## Lint and test

```bash
bin/rubocop
bin/rails test
```

## Notes

- Action Text is installed.
- Importmap pins Bootstrap 5, Chart.js, and SortableJS.
