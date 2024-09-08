# CaoVietHuy-InterviewProject

Dear Reviewer,

Thank you for taking the time to review this project. I hope you find it interesting and well-implemented. Below are the instructions to set up and review the application.

## Setup Instructions

1. Clone the repository to your local machine.

2. Create a file named `.env` in the root directory of the project.

3. In the `.env` file, add the following line, replacing `your_api_key_here` with a valid OpenAI API key:

   ```
   REACT_APP_OPENAI_API_KEY=your_api_key_here
   ```

4. Open a terminal in the project directory and run the following commands:
   ```
   npm i
   npm start
   ```

## Implementation Details

### Task 1: Input Field and Result Display

- Implemented an input field for user interaction
- Added functionality to display the input result below the field

### Task 2: Flexible Image Positioning

- Enhanced the `ContentBlock` component with a new `imagePosition` prop
- This prop allows dynamic switching of image position within the content block
- Please review at file `src/components/ContentBlock/index.tsx`

### Task 3: Chatbot Integration

- Integrated a chatbot using the [langchain/openai](https://www.npmjs.com/package/@langchain/openai) library
- Implemented conversational AI functionality to enhance user interaction
- Please review at file `src/models/langChainChatBot.ts`

## Review Guidelines

Once the application is running, please verify the following:

1. UI for Task 1

2. UI for Task 2

3. Chatbot functionality for Task 3

If you have any questions or encounter any issues during the review process, please don't hesitate to reach out me at caoviethuy11@gmail.com.

Thank you for your time and feedback!

Best regards,
[Your Name]
