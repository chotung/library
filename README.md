# README

Library is a virtual database to access information about books and it's associated author(s)

# Completed Features
- [x] Books have title and mulitple authors
- [x] Authors have a name and multiple books

Front-end Functionalities:
- [x] List for books
- [x] List for authors
- [x] Can select author or book

# BackLogged Features
- [ ] Duplicates
- [ ] Detailed Book View
	* a book view should display the book title,  authors, and either the title of a reference if the book is a duplicate or the titles of duplicates if the book is a reference
- [ ] Detailed Author View
	*  an author view should display the authors’ full name and the books they wrote
- [ ] Mark/Unmark a book as a duplicate
* Duplicates have not been implemented, possible solution would be to edit migration files and add :array type known as duplicates which will have a reference to others added
- [ ] Test Spec