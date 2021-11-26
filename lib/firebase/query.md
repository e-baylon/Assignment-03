# Firestore Query's

```javascript
let docRef = db.collection("users")
               .whereField("uid", isEqualTo: uid)
               .getDocuments { (snapshot, error) in
    print(snapshot.documents)
}
```