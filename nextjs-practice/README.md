Notes

1. HTML anchor tags will cause a browser to make a request to a server for the next page, and refresh the page, which is not ideal.
2. Client-side navigation, which nextjs's Link API provides, will prefetch the page, and navigation will happen without a page refresh.
3. Client-side navigation takes place in the browser, without making a request to the server. You can verify this by opening the brower's network request inspector.
4. Selecting the back button on the browser will navigate to previous page via the client. The 'next/link' does all the 'location.history' handling for you.
5. No need to write a single line of client-side routing code. 