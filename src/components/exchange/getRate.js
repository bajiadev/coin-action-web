import axios from "axios";


export const getRate = async (req, res) => {
  

    try {
      // const API_KEY = "b394182b-1b5c-4d07-80c5-cea5b8eb4ffe";
      // const BASE_URL = "https://api.rango.exchange/basic/meta";
      // const response = await axios.get(BASE_URL, {
      //   params: { apiKey: API_KEY },
      //   headers: { accept: "*/*" },
      // });


      const options = {
        url: 'https://api.rango.exchange/basic/meta?apiKey=c6381a79-2817-4602-83bf-6a641a409e32',
        headers: { accept: "*/*" },
      };

      const response = await axios.get(options);

      // const url = 'https://api.rango.exchange/basic/meta?apiKey=c6381a79-2817-4602-83bf-6a641a409e32';
      // const options = { method: 'GET', headers: { accept: '*/*' } };

      // const response = await fetch(url, options)
      //   .then(res => res.json())
      //   .then(json => console.log(json))
      //   .catch(err => console.error(err));


      if (response.data && response.data.rate) {
        return res.status(200).json(response.data);
      } else {
        return res.status(404).json({ error: "Rate not found" });
      }
    } catch (error) {
      console.error("Error fetching rate:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};
