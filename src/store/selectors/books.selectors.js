import { createSelector } from '@reduxjs/toolkit'

const booksState = (state) => state.books //same name as the slice

const selectBooksCount = createSelector(booksState, (books) => books.totalCount)

const selectBooks = createSelector(booksState, (books) => books.items)


export const BooksSelectors = {
    selectBooksCount,
    selectBooks
}
