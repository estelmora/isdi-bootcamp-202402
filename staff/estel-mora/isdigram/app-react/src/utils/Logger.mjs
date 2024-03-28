class Logger {
    static DEBUG = 0
    static INFO = 1
    static WARN = 2
    static ERROR = 3
    static FATAL = 4

    // constructor() {
    //     this.level = Logger.DEBUG
    // }
    level = Logger.DEBUG

    #buildMessage(messages) {
        return `${new Date().toISOString()} - ${messages.join(' ')}`
    }

    debug(...messages) {
        this.level < Logger.INFO && console.debug(`%c${this.#buildMessage(messages)}`, 'color: greenyellow')
    }

    info(...messages) {
        this.level < Logger.WARN && console.info(`%c${this.#buildMessage(messages)}`, 'color: dodgerblue')
    }

    warn(...messages) {
        this.level < Logger.ERROR && console.warn(`%c${this.#buildMessage(messages)}`, 'color: orange')
    }

    error(...messages) {
        this.level < Logger.FATAL && console.error(`%c${this.#buildMessage(messages)}`, 'color: tomato')
    }

    fatal(...messages) {
        console.error(`%c${this.#buildMessage(messages)}`, 'background-color: red; color: white; padding: 0 .5rem')
    }
}

export default Logger

//Static Properties: The class defines static properties for log levels, allowing levels to be referenced without needing to instantiate the class

//Instance Property - level: The default logging level is set to DEBUG. This property determines the minimum level of messages that will be logged. For example, if the level is set to WARN, then debug and info logs won't be shown

//Private Method - #buildMessage: This method takes an array of message parts, joins them into a single string, and prefixes it with a timestamp. The # indicates it's a private method, meaning it can only be called within the class itself

// Logging Methods (debug, info, warn, error, fatal): Each of these logs messages to the console at their respective levels. They use console.debug, console.info, console.warn, console.error with formatted messages. The visibility of these logs is controlled by the level property; only logs at or above the set level are output

// %c in console methods is a formatting option used to apply CSS styles to the output message, enhancing log visibility