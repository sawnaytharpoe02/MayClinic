import logger from 'pino'
import dayjs from 'dayjs'

const log = logger({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
    },
  },
  base: {
    pid: false
  }
})

export default log