# Ka.Y.E #5431

### By: Ethan Jed Tan, Tan Yuan Zheng 

## Demo Link:

http://app.acfacility.xyz/

Email: testing@test
Password: testaccount1

## Known issues

- App does not redirect to user page after signup
  - Signing in on the root page correctly redirects to dashboard page though
- App does not check for existing users during signup

## To-do
- [ ] Set a redirect under the signUp function in ProvideAuth when response.user is not null
- [ ] Connections registration feature + Connections page
  - [ ] Button that appears if there is no entry in the user's table for an external account
  - [ ] A button to unlink otherwise
- [x] Front page
- [x] Correctly redirect to dashboard from login
- [ ] Persistent Login State
- [x] Check for existing users during signup
- [ ] Redirect to user page after signup
- [x] Redirect to login if dashboard is accessed while unauthenticated

## Questions
- [ ] What does useContext do?
- [ ] What is the best way to create persisting authentication states?

## Meeting  16/6/2022
- Cookies
  - Credentials sent to back end to authenticate
  - Server sends a token back as a cookie for the client
  - Cookie is stored in browser cookies, which is sent back to server when needed
- There are libraries for tokens
- Suggestions
  - Consolidate logic in one place
    - Bots talk to the webapp, where the logic is
    - Information returns to all three frontends

## Milestone 2
- [ ] Create Events on all three frontends
- [ ] RSVP from all frontends

## Motivation

Our motivation for our project stems from problems we face in our daily lives.

Have you ever tried to organise an outing with your friends, but trying to find one free time out of everyone’s schedules feels like an NP hard problem? Did you ever wish that that one Quality of Life (QOL) feature™ from one app would be finally implemented in the other apps that you use? Did you ever wish there was something to spice up your group chats with memes and macros? What if I told you, you can solve all these problems in one app? 

And that is the motivation we set off with. We believe that for every QOL problem out there, there is likely already a solution out there that sort of fulfils the need. However, more often than not, these solutions are standalone, isolated within the ecosystem of the app they are built in, and using them only barely scratches the itch on the surface, and leaves much to be desired to the overall utility it provides. Our team’s goal is to develop an app that consolidates some of the commonly used QOL features in two of the most popular messaging sites, Telegram and Discord, and gather them all in one app. With this, our app hopes to enhance our general QOL experiences by making communications between our friends more convenient and streamlined on the platforms that we use every day.

The culmination of attempted QOL solutions to big everyday problems or even simple daily inconveniences, sprinkled with our own wishes in what we want to see in a bot app, we introduce Ka.Y.E.. 

## Aim 

The aim of this project is to integrate common QOL solutions into one synergistic app that is streamlined for an ergonomic user experience.

For example, one of our features is providing a greater quality of life for social groups to organise outings. We noticed that while there are plenty of scheduling apps readily available, they are either targeted towards professionals (e.g. Calendly/ Doodle with Teams/Zoom integration), or generally lacking in integration with commonly used apps (e.g. when2meet.com). Hence, users generally only use these apps for this one specific purpose, and have to manually do the rest of the organisation, such as reminding users to submit their availability and RSVP. Our app aims to streamline the process such that the user does not have to do anything beyond creating the event in our app, and the rest of the process, such as indicating availability, suggesting optimal timings, RSVP, and scheduled reminders are all automated by the app. The details of the process will be further elaborated on in the Features section.

## Overview of features

1. A **Web-based personal organiser** that will help users to keep track of upcoming events, such as academic deadlines, CCA events, and outings with friends. Users will be able to sign in using their Google account, register their Telegram and Discord accounts with the app, and schedule events with other users. Other features, such as keeping track of users' birthdays, are included as well.

2. The **Telegram Bot** provides an interface in the form of both a chat-bot as well as through bot commands for users to conveniently access their organizer without having to directly access the web app. It will provide functionalities such as sending reminders, enquiring about upcoming events, scheduling events and sending RSVP requests to other telegram users via group chats. 

3. The **Discord Bot** supports all the features that the Telegram bot has. It will also support features that are commonly found in many Discord Bots. The bot will also have customisable features which allow server admins to tailor the experience the bot provides to their specific needs or deployment cases.

4. The app intends to distinguish itself from regular quality of life apps by integrating multiple platforms. With slash commands, we intend to make all our features available cross platforms.

## Details of features

### Core functionalities:

- User/account management by integrating Google Sign-In, telegram handles and discord tags 
- Keeps track of key information such as the user’s birthday (Supabase), todos and upcoming events (Google Calendar API) 
- Scheduling of events: users can create new events (Project work deadline, group outing etc) and share this event with other users. Other users who receive the shared event can RSVP to the event. 
    - Functionality of choosing the best date for events: the user creating the event can set the range of possible dates, and his preferred dates within the range of possible dates. RSVP users can then RSVP with their own preferred dates and available dates, and the app will keep track of the best available date for the event based on availability and preference of event goers. 

### Web app features:
- **Dashboard:** Includes a calendar view, displaying events and todos for each day. Events logged in Google calendar will be displayed here and vice versa through integration with Google calendar API.
- **Events page:** goes into the event and displays the relevant details pertaining to the event.
    - Date and Time
    - Location (with Google Maps integration(?))
    - Users involved
    - Activity details and relevant todos
    - Monetary log: keeps track of all IOUs incurred during the event in the form of a communal ledger, and integrates e-Payment options to settle these IOUs. (Note: this functionality comes from our desire to learn e-Payment API integration in web apps. However, since neither of us are experienced in this area, we are unsure of the feasibility of this feature. In the case that this feature proves to be unfeasible, it is still acceptable in the case of this project as it is not a core feature.)
- **User profile page:** Allows a user to customize their profile. In essence, a settings page, where they can add/remove telegram/discord handles, and link/unlink their google account.

### Telegram bot features:
- **Chatbot:** to give the personal assistant app more character and flair (and also because we want to practice deploying ML models on the cloud), all the functions of the bot will also be implemented through a chat bot on top of slash commands.
    - The chatbot will be able to do basic levels of natural language processing, and hold natural conversations with users to some extent. It should also be able to recognise when users are requesting for certain services and provide them, such as: 
    - nquiring for upcoming scheduled events and todos.
    - Setting reminders for upcoming events.
    - Creating an event and sending the RSVP message within a telegram chat.
    - Responding to RSVP messages sent.
    - Request nice art from the interwebs through integration of danbooru and twitter API.
    - Reverse image search through Saucenao API.

### Discord bot features:
- Chatbot: same as the telegram bot with small differences below:
    - Creating an event and sending the RSVP message within a channel or based on roles.
- Allow customizability between different instances on different servers
    - For example, the bot will respond to trigger words with images randomly selected from a pool. Both the list of trigger words and pool of images can be customised by the user.
