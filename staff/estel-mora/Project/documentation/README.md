# Sonar Cast  🎙️

## Intro

An innovative software platform where the art of podcasting meets the precision of AI technology. Our sophisticated system is adept at processing audio files from diverse sources, including YouTube, Spotify, Apple, and more. With unparalleled accuracy, it transcribes the spoken word into written text, capturing every nuance of your content.

Leveraging a secondary AI, integrated seamlessly with various APIs, our platform identifies and generates hot topics. This ensures that your podcast content resonates with current trends, enhancing ideas and enriching discussions. By doing so, it strategically positions your podcast to attract more listeners and significantly increase viewership.

![](https://media.giphy.com/media/GXRLwv0JGeLQiWipb8/giphy.gif?cid=ecf05e47pe2k824ndf2lkms60dx0vg133iaisn8rj2xdzxhr&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional
Here’s how the service works:

- Landing Page: New users are greeted with a landing page that provides them with two options: to register as a new user or to log in if they already have an account.

- Register User: where new users can sign in, by providing some personal data such as: name, email, username, birthdate, and password. 

- Home Page: Once logged in, users are directed to the home page, whichwill be the hub from where all activities are carried out. A logout button is available for users to exit their accounts.

- Upload Files: Podcast creators can upload their podcast files either directly from their computer or through a link from various platforms such as Spotify, YouTube, Apple, etc.

- Analyze Files: After uploading, the files can be analyzed by a feature called WHISPER - IA, which listens to the podcast audio file, analyzes it, and creates transcripts. This is likely a speech-to-text functionality that allows for the podcast content to be converted into written form.

- Idea Generator: The service offers a creative tool that suggests trending topics and key words based on the content of the podcast and what's currently trending, to help podcast creators generate content that is relevant and has the potential to engage more listeners.

- Content Optimization: Furthermore, the service creates a list with topics and suggested keywords to improve the podcast, which can be vital for search engine optimization (SEO) and enhancing the discoverability of the podcast on various platforms.

### UI Design

[Figma](link to figma )

## Technical

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies

- TypeScript
- React
- Express
- Node
- Tailwind
- Mongo
- ...

### Data Model

User
- id (required)
- name (string, required)
- birthdate (date, required)
- email (string, required)
- username (string, required)
- password (string, required)

Upload File
- file (optional)
- link (optional)

Product
- id (required)
- place (Place.id, required)
- title (string, required)
- image (string, required)
- description (string, required)
- price (number, required)

Order
- id (required)
- user (User.id, required)
- place (Place.id, required)
- payed (boolean, required, default false)
- products ([Product.id])
- date (date, required)

Review
- id (required)
- place (Place.id, required)
- user (User.id, required)
- rate (number, required, enum: 1|2|3|4|5)
- comment (string, optional)
- date (date, required)