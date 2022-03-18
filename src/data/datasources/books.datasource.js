
import { HttpClient } from "."; 

export function fetchBooks(skipCount=0, maxResultCount=10, filter="") {
    return HttpClient.get("/api/books", {
        params: {skipCount, maxResultCount, filter}
    })
}