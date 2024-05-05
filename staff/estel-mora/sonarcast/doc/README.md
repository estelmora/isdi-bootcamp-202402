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

- Analyze Files: After uploading, the files can be analyzed by a feature called WHISPER - IA - WHISPER  (API) which listens to the podcast audio file, analyzes it, and creates transcripts. This is likely a speech-to-text functionality that allows for the podcast content to be converted into written form.

- Content Transcription: the service genegerates a transcript from the listened podcast up to 45 minuts long, therefore this leads to the next functionality

- Idea Generator & Content Optimitzation  The service offers a creative tool that suggests trending topics and key words based on the content of the podcast and what's currently trending, to help podcast creators generate content that is relevant and has the potential to engage more listeners.

### Use Cases 📝
- podcast list by title
- xxx nom de les funcions seguramnet


### UI Design 📝
[Figma](link thttpmsmsmd/.com)

## Technical 📝

### Modules
- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies 📝

- TypeScript
- React
- Express
- Node
- MongoDB
- Mongo Atlas
- OpenAI
- Whisper (transcript audio to text)
- Flowbite 

### Data Model

User
- id (auto, required)
- name (string, required)
- surname(string, required)
- email (string, required)
- password (string, required)

Podcast

- id (auto, required)
- title (string, required)
- transcript (string, required)
- ideas (string)
- date (auto, required)
- author (userId, required)
