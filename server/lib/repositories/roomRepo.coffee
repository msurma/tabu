_ = require 'lodash'

class roomRepo
  this._rooms = {}
  this._roomTemplate =
    roomId: null
    gameStarted: false
    config:
      gamePassword: false
      maxPoints: 50
      roundLength: 120
      allowNewUsersToJoinWhenStarted: true
    roundStarted: null
    masterChangeInRounds: 5
    currentCard: []
    cardsHistory: {}
    players: {}

  getRooms: ->
    return roomRepo._rooms;

  getRoom: (roomId) ->
    if this.isRoomExists(roomId)
      return roomRepo._rooms[roomId]
    else
      return false

  createRoom: ->
    roomId = this._getFirstAvailableRoomId()

    roomRepo._rooms[roomId]           = _.clone(roomRepo._roomTemplate)
    roomRepo._rooms[roomId]['roomId'] = roomId
    return roomRepo._rooms[roomId]

  deleteRoom: (roomId) ->
    if this.isRoomExists(roomId) then delete roomRepo._rooms[roomId]

  isRoomExists: (roomId) ->
    return _.has(roomRepo._rooms, roomId)

  _getFirstAvailableRoomId: ->
    roomId             = 100
    availableRoomFound = false

    loop
      if not this.isRoomExists(roomId)
        return roomId;
      else
        roomId += 1

      break if availableRoomFound

module.exports = roomRepo
