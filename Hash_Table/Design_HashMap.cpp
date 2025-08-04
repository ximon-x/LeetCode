#include <cstdint>
using namespace std;

class Node {
public:
  int key;
  int value;
  Node *next;

  Node(int _key, int _value, Node *_next) {
    key = _key;
    next = _next;
    value = _value;
  }
};

class MyHashMap {
  const static uint32_t A = 18617087;
  const static uint16_t m = 15373;

  Node *data[m] = {};

public:
  MyHashMap() {}

  void put(int key, int value) {
    uint16_t bucket = hash(key);
    Node *cursor = data[bucket];

    if (!cursor) {
      data[bucket] = new Node{key, value, nullptr};
      return;
    }

    while (cursor->next) {
      if (cursor->key == key) {
        cursor->value = value;
        return;
      }

      cursor = cursor->next;
    }

    if (cursor->key == key) {
      cursor->value = value;
    } else {
      cursor->next = new Node{key, value, nullptr};
    }
  };

  int get(int key) {
    uint16_t bucket = hash(key);
    Node *cursor = data[bucket];

    while (cursor) {
      if (cursor->key == key)
        return cursor->value;

      cursor = cursor->next;
    }

    return -1;
  };

  void remove(int key) {
    uint16_t bucket = hash(key);
    Node *cursor = data[bucket];

    // Bucket is Empty
    if (!cursor)
      return;

    // Remove head
    if (cursor->key == key) {
      data[bucket] = cursor->next;
      delete cursor;
      return;
    }

    while (cursor->next) {
      if (cursor->next->key == key) {
        Node *temp = cursor->next;
        cursor->next = cursor->next->next;
        delete temp;
        return;
      }

      cursor = cursor->next;
    }
  };

private:
  uint16_t hash(int32_t key) { return (key * A) % m; }
};
