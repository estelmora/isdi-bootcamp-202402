class Logger {
    static DEBUG = 0
    static INFO = 1
    static WARN = 2
    static ERROR = 3
    static FATAL = 4

    level = Logger.DEBUG

    #buildMessage(messages) {
        return `${new Date().toISOString()} - ${messages.join(' ')}`
    }

    debug(...messages) {
        if (this.level <= Logger.DEBUG) {
            console.debug(`%c${this.#buildMessage(messages)}`, 'color: green')
        }
    }

    info(...messages) {
        if (this.level <= Logger.INFO) {
            console.info(`%c${this.#buildMessage(messages)}`, 'color: blue')
        }
    }

    warn(...messages) {
        if (this.level <= Logger.WARN) {
            console.warn(`%c${this.#buildMessage(messages)}`, 'color: orange')
        }
    }

    error(...messages) {
        if (this.level <= Logger.ERROR) {
            console.error(`%c${this.#buildMessage(messages)}`, 'color: red')
        }
    }

    fatal(...messages) {
        console.error(`%c${this.#buildMessage(messages)}`, 'background-color: red; color: white; padding: 0 .5rem')
    }
}

const logger = new Logger()

export default logger