import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  let imageUrl =
    "https://images.unsplash.com/photo-1501973801540-537f08ccae7b";

  if (info.humidity > 80)
    imageUrl =
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29";
  else if (info.temp > 30)
    imageUrl =
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d";
  else if (info.temp < 15)
    imageUrl =
      "https://images.unsplash.com/photo-1608889175250-c3c0b56c7a89";
  else if (info.weather.includes("haze"))
    imageUrl =
      "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227";

  return (
    <div className="infoBox">
      <h2>
        {info.city} • {info.weather} 🌤
      </h2>

      <Card className="weatherCard">
        <CardMedia sx={{ height: 200 }} image={imageUrl} />
        <CardContent className="weatherDetails">
          <Typography>🌡 Temperature: {info.temp}°C</Typography>
          <Typography>💧 Humidity: {info.humidity}%</Typography>
          <Typography>⬇ Min Temp: {info.tempmin}°C</Typography>
          <Typography>⬆ Max Temp: {info.tempmax}°C</Typography>
          <Typography>
            🤔 Feels like: {info.feelslike}°C
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
