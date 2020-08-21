const Track = require("../models/Track");

exports.listTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find({ userId: req.user.id });
    res.status(200).json({
      status: "success",
      data: { tracks },
    });
  } catch (error) {
    res.status(400).json({
      status: failed,
      data: { msg: error.message },
    });
  }
};

exports.createTrack = async (req, res, next) => {
  try {
    const { name, locations } = req.body;
    if (!locations) {
      throw new Error("locations are required.");
    }
    const track = await Track.create({ name, locations, userId: req.user.id });
    res.status(200).json({
      status: 201,
      data: { track },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: { msg: error.message },
    });
  }
};
