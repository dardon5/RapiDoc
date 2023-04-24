import Doctor from "../models/Doctor.js";

export const createDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
};

export const getDoctors = async (req, res, next) => {
  try {
    const { specialty, price, insurance, location } = req.query;

    // Build the query object based on the request parameters
    const query = {};
    if (specialty) {
      query.specialties = { $in: [specialty] };
    }
    if (price) {
      const priceNum = Number(price);
      if (!isNaN(priceNum)) {
        query.price = priceNum;
      } else {
        return res.status(400).json({
          success: false,
          error: "Invalid price value",
        });
      }
    }
    if (insurance) {
      query.insurance = { $in: [insurance] };
    }
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const doctors = await Doctor.find(query);
    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    next(error);
  }
};

export const getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
};

export const updateDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
