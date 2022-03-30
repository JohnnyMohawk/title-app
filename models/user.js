import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 6

const userSchema = new mongoose.Schema({
  handle: {
      type: String,
      required: true,
      unique: true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true
  },
  password: {
      type: String,
      required: true
  },
  avatar: {
      type: String,
      required: true
  },
  title_win_count: {
      type: Number,
      required: false,
      default: 0,
  },
  posts: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post'
      }
  ]
}, { timestamps: true })

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password
    return ret
  },
})

userSchema.pre('save', function(next) {
  const user = this
  if (!user.isModified('password')) return next()
  // The password has changed/is new!!
  bcrypt.hash(user.password, SALT_ROUNDS)
  .then(hash => {
    user.password = hash
    next()
  })
  .catch(err => {
    next(err)
  })
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

const User = mongoose.model('User', userSchema)

export { User }
