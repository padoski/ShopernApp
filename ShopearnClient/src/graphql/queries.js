/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      adverts {
        items {
          id
          createdAt
          userId
          carId
          typ
          request
          price
          contact
          time
          latitude
          longitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        adverts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      latitude
      longitude
      heading
      adverts {
        items {
          id
          createdAt
          userId
          carId
          typ
          request
          price
          contact
          time
          latitude
          longitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        latitude
        longitude
        heading
        adverts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdvert = /* GraphQL */ `
  query GetAdvert($id: ID!) {
    getAdvert(id: $id) {
      id
      createdAt
      userId
      user {
        id
        username
        email
        adverts {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        adverts {
          nextToken
        }
        createdAt
        updatedAt
      }
      typ
      request
      price
      contact
      time
      latitude
      longitude
      updatedAt
    }
  }
`;
export const listAdverts = /* GraphQL */ `
  query ListAdverts(
    $filter: ModelAdvertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdverts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          createdAt
          updatedAt
        }
        typ
        request
        price
        contact
        time
        latitude
        longitude
        updatedAt
      }
      nextToken
    }
  }
`;
