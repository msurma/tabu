roomRepo = require '../repositories/roomRepo'
roomRepo = new roomRepo

class roomCtrl
  getRooms: ->
    return roomRepo.getRooms()

  getRoom: (roomId) ->
    return roomRepo.getRoom(roomId)

  createRoom: ->
    return roomRepo.createRoom()

  deleteRoom: (roomId) ->
    return roomRepo.deleteRoom(roomId)


module.exports = roomCtrl
