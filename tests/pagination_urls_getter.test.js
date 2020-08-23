const {
    get_pagination_urls
} = require('../pagination_urls_getter');
const {
    pagination_urls_getter_test_cases
} = require('./test_cases')



describe("pagination_urls_getter package", () => {
    describe("get_pagination_urls function", () => {
        test.each(pagination_urls_getter_test_cases)('myFunc work correctly for %s', ({
            matchUrl1,
            matchUrl2,
            output
        }) => {
            expect(get_pagination_urls(matchUrl1, matchUrl2)).toStrictEqual(output)
        })

    });
});