
export const getGeolocation = async (ip: string) => {
    const URL = `https://geo.ipify.org/api/v1?apiKey=at_jCfpV6wLN9fdKRqpcNIZp2Xnuz5Mk&ipAddress=${ip}`

    const resp = await fetch(URL);
    const data = await resp.json();

    return  {
        lng: data.location.lng,
        lat: data.location.lat,
        ip: data.ip,
        city: data.location.city,
        country: data.location.country,
        postalCode: data.location.postalCode,
        timeZone: data.location.timezone,
        isp: data.isp
    }


}