import Appointment from "../models/Appointment.js";
import Doctor from "../models/Doctor.js";

export const createAppointment = async (req, res, next) => {
  try {
    const { doctor, patient, date, price } = req.body;
    const appointment = await Appointment.create({
      doctor,
      patient,
      date,
      price,
    });
    res.status(201).json({ appointment });
  } catch (error) {
    next(error);
  }
};

export const getAppointments = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const allAppointments = await Appointment.find({
      patient: userId,
    }).populate("doctor", "name speciality");

    const now = new Date();

    const upcomingAppointments = [];
    const pastAppointments = [];

    allAppointments.forEach((appointment) => {
      console.log(appointment.date);
      console.log(now);
      if (appointment.date >= now) {
        upcomingAppointments.push(appointment);
      } else {
        pastAppointments.push(appointment);
      }
    });

    res.status(200).json({
      success: true,
      upcomingAppointments,
      pastAppointments,
    });
  } catch (error) {
    next(error);
  }
};

export const getAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.json({ appointment });
  } catch (error) {
    next(error);
  }
};

export const updateAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { doctor, user, date, time } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { doctor, user, date, time },
      { new: true }
    );
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.json({ appointment });
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
