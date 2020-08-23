const faker = require('faker');
var pagination_urls_getter_test_cases = [{
        "matchUrl1": null,
        "matchUrl2": null,
        "output": []
    },
    {
        "matchUrl1": undefined,
        "matchUrl2": undefined,
        "output": []
    },
    {
        "matchUrl1": faker.internet.url(),
        "matchUrl2": faker.internet.url(),
        "output": []
    },
    //SHOULD FAIL IF ANY ONE IS NOT A VALID URL
    {
        "matchUrl1": faker.internet.email(),
        "matchUrl2": faker.internet.url(),
        "output": []
    },
    //SHOULD FAIL IF BOTH URLS ARE SAME
    {
        "matchUrl1": 'https://careers.ibm.com/ListJobs/All/Page-2/?lang=en',
        "matchUrl2": 'https://careers.ibm.com/ListJobs/All/Page-2/?lang=en',
        "output": []
    },
    {
        "matchUrl1": 'https://careers.ibm.com/ListJobs/All/Page-1/?lang=en',
        "matchUrl2": 'https://careers.ibm.com/ListJobs/All/Page-2/?lang=en',
        "output": [
            'https://careers.ibm.com/ListJobs/All/Page-1/?lang=en',
            'https://careers.ibm.com/ListJobs/All/Page-2/?lang=en',
            'https://careers.ibm.com/ListJobs/All/Page-3/?lang=en'
        ]
    },
    {
        "matchUrl1": 'https://careers-cengage.icims.com/jobs/search?pr=1',
        "matchUrl2": 'https://careers-cengage.icims.com/jobs/search?pr=2',
        "output": [
            'https://careers-cengage.icims.com/jobs/search?pr=1',
            'https://careers-cengage.icims.com/jobs/search?pr=2',
            'https://careers-cengage.icims.com/jobs/search?pr=3'
        ]
    },
    {
        "matchUrl1": 'http://curtismedia.com/category/employment/page/1/',
        "matchUrl2": 'http://curtismedia.com/category/employment/page/2/',
        "output": [
            'http://curtismedia.com/category/employment/page/1/',
            'http://curtismedia.com/category/employment/page/2/',
            'http://curtismedia.com/category/employment/page/3/'
        ]
    },
    {
        "matchUrl1": 'https://www.edjoin.org/Home/Jobs?rows=0&page=1&sort=postingDate&order=desc&keywords=beaumont%20unified%20school%20district&searchType=all&states=&regions=&jobTypes=&days=0&catID=0&onlineApps=false&recruitmentCenterID=0&regionID=0&districtID=0&searchID=0',
        "matchUrl2": 'https://www.edjoin.org/Home/Jobs?rows=25&page=1&sort=postingDate&order=desc&keywords=beaumont%20unified%20school%20district&searchType=all&states=&regions=&jobTypes=&days=0&catID=0&onlineApps=false&recruitmentCenterID=0&regionID=0&districtID=0&searchID=0',
        "output": [
            'https://www.edjoin.org/Home/Jobs?rows=0&page=1&sort=postingDate&order=desc&keywords=beaumont%20unified%20school%20district&searchType=all&states=&regions=&jobTypes=&days=0&catID=0&onlineApps=false&recruitmentCenterID=0&regionID=0&districtID=0&searchID=0',
            'https://www.edjoin.org/Home/Jobs?rows=25&page=1&sort=postingDate&order=desc&keywords=beaumont%20unified%20school%20district&searchType=all&states=&regions=&jobTypes=&days=0&catID=0&onlineApps=false&recruitmentCenterID=0&regionID=0&districtID=0&searchID=0',
            'https://www.edjoin.org/Home/Jobs?rows=50&page=1&sort=postingDate&order=desc&keywords=beaumont%20unified%20school%20district&searchType=all&states=&regions=&jobTypes=&days=0&catID=0&onlineApps=false&recruitmentCenterID=0&regionID=0&districtID=0&searchID=0'
        ]
    }
]


//https://www.edjoin.org/Home/Jobs?rows=10&page=1&sort=postingDate&order=desc&keywords=beaumont%20unified%20school%20district&searchType=all&states=&regions=&jobTypes=&days=0&catID=0&onlineApps=false&recruitmentCenterID=0&regionID=0&districtID=0&searchID=0
module.exports = {
    pagination_urls_getter_test_cases
}