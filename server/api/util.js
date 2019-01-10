function requireLogin(req, res, next) {
  console.log('===what is req.user??==> ', req.user)
  req.user = { isAdmin: '' }
  if (req.user) {
    console.log('=====In requireLogin function??===')
    next()
  }
  res.sendStatus(401)
}

function requireAdmin(req, res, next) {
  req.user.isAdmin = true
  console.log('=====In requireAdmin function??===> ', req.user.isAdmin)

  if (req.user.isAdmin) {
    console.log('=====In requireAdmin isAdmim??===')
    next()
  }
  res.sendStatus(403)
}

module.exports = { requireLogin, requireAdmin }
