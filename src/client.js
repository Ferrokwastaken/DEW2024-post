const User = require('./user')

class Client extends User {
  billing = 0

  notify (post) {
    if (post.price !== undefined) {
      this.billing = Math.round((this.billing + post.price) * 100) / 100
    }
    return super.notify(post)
  }
}

module.exports = Client
