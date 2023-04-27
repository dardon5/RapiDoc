import Appointment from "../models/Appointment.js";
import User from "../models/User.js";

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
    const userId = req.user.id;
    const user = await User.findById(userId).populate({
      path: "appointments",
      populate: {
        path: "doctor",
      },
    });

    const now = new Date();
    const upcomingAppointments = user.appointments.filter(
      (appointment) => appointment.date > now && appointment.doctor
    );
    const pastAppointments = user.appointments.filter(
      (appointment) => appointment.date <= now && appointment.doctor
    );

    res.json({ upcomingAppointments, pastAppointments });
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
