import City from "../Models/City.js";
import Itinerary from "../Models/Itinerary.js";

const itineraryController = {
    getAllItinerary: async (request, response, next) => {
        try {
            const itineraries = await Itinerary.find()
            response.status(200).json({ response: itineraries });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },

    getOneItinerary: async (request, response, next) => {
      const { id } = request.params;
      try {          
          const finditinerary = await Itinerary.findById(id);
          response.json({ success: true, response: finditinerary });
      } catch (error) {
          response.json({ success: false, response: "Error '_id' of itinerary not valid." });
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