import City from "../Models/City.js";
import Itinerary from "../Models/Itinerary.js";
import mongoose from "mongoose";

const itineraryController = {
    getAllItinerary: async (request, response, next) => {
        try {
            const itineraries = await Itinerary.find()
            response.status(200).json({ response: itineraries });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },

    getItinerariesByCityRelated: async (request, response, next) => {
      const { cityId } = request.params;
      try {
        if (!mongoose.Types.ObjectId.isValid(cityId)) {
          return response.json({ success: false, response: "Invalid cityId." });
        }
        const itineraries = await Itinerary.find({ cityRelated: cityId });
        if (itineraries.length === 0) {
          response.json({ success: false, response: "No itineraries found for this city." });
        } else {
          response.json({ success: true, response: itineraries });
        }
      } catch (error) {
        response.status(500).json({ success: false, response: error.message });
      }
    },

    createOneItinerary: async (request, response, next) => {
        try {
            const newItineraryData = request.body;
            const cityName = newItineraryData.cityRelated;
            console.log("City Name:", cityName);
            const city = await City.findOne({ name: cityName });    
            if (!city) {
                response.status(404).json({ error: 'City not found' });
                return;
            }
            newItineraryData.cityRelated = city._id;                
            const itinerary = await Itinerary.create(newItineraryData);
            response.status(201).json({ response: itinerary });
        } catch (error) {
            response.status(500).json({ error });
        }
    },

    updateOneItinerary: async (request, response, next) => {
        try {
          const itineraryId = request.params.id;
          const updatedItinerary = await Itinerary.findByIdAndUpdate(
            itineraryId,
            request.body,
            { new: true }
          );
          response.json({ response: updatedItinerary });
        } catch (error) {
          response.status(500).json({ error });
        }
      },
    
      deleteOneItinerary: async (request, response, next) => {
        try {
          const itineraryId = request.params.id;
          const deletedItinerary = await Itinerary.findByIdAndRemove(itineraryId);
          response.json({ response: deletedItinerary });
        } catch (error) {
          response.status(500).json({ error });
        }
      },
}

export default itineraryController;