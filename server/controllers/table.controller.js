import Lock from "../models/lock.model.js";

export const lockTable = async (req, res) => {
  const { tableId, userId, duration } = req.body;
  const time = new Date();
  const expiry = new Date(time.getTime() + duration * 1000);

  try {
    const existingLock = await Lock.findOne({ tableId });

    if (existingLock && existingLock.expiry > time) {
      return res.status(409).json({
        success: false,
        message: "Table is currently locked by another user.",
      });
    }

    await Lock.findOneAndUpdate(
      { tableId },
      { userId, expiry },
      { upsert: true, new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Table locked successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};



export const unlockTable = async (req, res) => {
  const { tableId, userId } = req.body;

  try {
    const lock = await Lock.findOne({ tableId });

    if (!lock) {
      return res
        .status(404)
        .json({ success: false, message: "No lock found for this table." });
    }

    if (lock.userId !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Sorry ,You do not own this lock ." });
    }

    await Lock.deleteOne({ tableId });

    return res
      .status(200)
      .json({ success: true, message: "Table unlocked successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};


export const tabelStatus = async (req, res) => {
  const { tableId } = req.params;
  try {
    const lock = await Lock.findOne({ tableId });
    if(!lock){
      return res.status(200).json({"isLocked":false});
    }
    else{
      return res.status(200).json({"isLocked":true});
    }
  } catch (error) {
    console.log(error);
  }
}