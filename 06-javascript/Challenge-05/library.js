function createLibrary() {

    class Book {
        constructor({ isbn, title, author, copies }) {
            this.isbn = isbn;
            this.title = title;
            this.author = author;
            this.totalCopies = copies;
            this.availableCopies = copies;
        }
    }

    class Member {
        constructor({ id, name, email }) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.history = [];
        }
    }

    const books = new Map();
    const members = new Map();
    const borrowRecords = [];

    return {
        addBook(bookData) {
            if (!books.has(bookData.isbn)) {
                books.set(bookData.isbn, new Book(bookData));
            }
        },

        addMember(memberData) {
            if (!members.has(memberData.id)) {
                members.set(memberData.id, new Member(memberData));
            }
        },

        borrowBook(memberId, isbn) {
            const book = books.get(isbn);
            const member = members.get(memberId);

            if (!book || !member || book.availableCopies === 0) return;

            book.availableCopies--;

            const record = {
                isbn,
                title: book.title,
                memberId,
                borrowedAt: new Date(),
                returnedAt: null
            };

            borrowRecords.push(record);
            member.history.push(record);
        },

        returnBook(memberId, isbn) {
            const book = books.get(isbn);
            if (!book) return;

            const record = borrowRecords.find(
                r => r.memberId === memberId && r.isbn === isbn && !r.returnedAt
            );

            if (!record) return;

            record.returnedAt = new Date();
            book.availableCopies++;
        },

        getAvailableCopies(isbn) {
            return books.get(isbn)?.availableCopies || 0;
        },

        getMemberHistory(memberId) {
            return members.get(memberId)?.history || [];
        },

        getOverdueBooks() {
            const now = new Date();
            const LIMIT = 14 * 24 * 60 * 60 * 1000;

            return borrowRecords.filter(
                r => !r.returnedAt && (now - r.borrowedAt) > LIMIT
            );
        },

        searchBooks(keyword) {
            const key = keyword.toLowerCase();
            return [...books.values()].filter(
                b => b.title.toLowerCase().includes(key) ||
                     b.author.toLowerCase().includes(key)
            );
        }
    };
}
