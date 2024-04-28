# Sonar Cast  🎙️

## Intro

An innovative software platform where podcasting meets the precision of AI technology. Is adept at processing audio files with accuracy and it transcribes the spoken word into written text, capturing every nuance of your content.

Leveraging a secondary AI, integrated seamlessly with various APIs, the platform identifies and generates hot topics. This ensures that your podcast content resonates with current trends, enhancing ideas and enriching discussions. By doing so, it strategically positions your podcast to attract more listeners and significantly increase viewership.

![](https://media.giphy.com/media/GXRLwv0JGeLQiWipb8/giphy.gif?cid=ecf05e47pe2k824ndf2lkms60dx0vg133iaisn8rj2xdzxhr&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description
this is what the software can do on version 0

- Landing Page: New users are greeted with a landing page that provides them with two options: to register as a new user or to log in if they already have an account.

- Register User:new users can sign in, by providing some personal data such as: name, email and password. 

- Home Page: Once logged in, users are directed to the home page, whichwill be the hub from where all activities are carried out. A logout button is available for users to exit their accounts.

- Upload Files: Podcast creators can upload their podcast files either directly from their computer. 

- Analyze Files: After uploading, the files can be analyzed by a feature called WHISPER - IA - WHISPER X (API) which listens to the podcast audio file, analyzes it, and creates transcripts. This is likely a speech-to-text functionality that allows for the podcast content to be converted into written form.

- Content Optimitzation: the service creates a list/ summary of the most topics talked about and suggests keywords in order to use them also, this summary leads to the next functionality

- Idea Generator & Content Optimitzation  The service offers a creative tool that suggests trending topics and key words based on the content of the podcast and what's currently trending, to help podcast creators generate content that is relevant and has the potential to engage more listeners.

### Use Cases
- filter & list summaries
- create a summary (from audio file)
- delete a summary
- edit a summary


### UI Design

[Figma](https://www.figma.com/file/Bn8AS2vyTPx90Ol2IFIYLk/Isdi-Project?type=design&node-id=0%3A1&mode=dev&t=aLSeYw2eP3QbsG6U-1 )

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
- MongoDB
- OpenAI
- WhisperX (transcript audio to text)

### Data Model

User
- id (auto, required)
- name (string, required)
- email (string, required)
- password (string, required)

Summary
- // summary it's the whole process of uploading, receiving the transcript, edit, generate new ideas, and edit them, and finnaly save them
- id (auto, required)
- author (User.id, required) 
- transcript (string, optional)
- topics (string, optional)
