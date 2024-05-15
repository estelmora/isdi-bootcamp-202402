import OpenAI from 'openai'
import logger from '../../utils/logger'

async function createIdeas(apiKey, transcript) {
    try {
        logger.debug('Creating OpenAI instance')
        const openai = new OpenAI({ apiKey })

        logger.debug('Sending transcript to OpenAI for idea generation')
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You need to provide ideas for a podcast host to discuss in their next podcast, based on the transcript of the following podcast. Don't repeat specific topics already covered in this topic. Instead, propose new topics that are related to the subject matter discussed in the podcast. Reply in the same language as the podcast. Reply only with the list of ideas and nothing else."
                },
                { role: "user", content: transcript }
            ],
            model: "gpt-4-turbo"
        })

        const ideas = completion.choices[0].message.content
        logger.info('Successfully generated ideas from OpenAI')
        return ideas
    } catch (error) {
        logger.error('Error creating ideas', error)
        throw error
    }
}

export default createIdeas
