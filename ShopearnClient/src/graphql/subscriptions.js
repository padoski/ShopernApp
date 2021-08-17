/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
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
export const onCreateAdvert = /* GraphQL */ `
  subscription OnCreateAdvert {
    onCreateAdvert {
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
export const onUpdateAdvert = /* GraphQL */ `
  subscription OnUpdateAdvert {
    onUpdateAdvert {
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
export const onDeleteAdvert = /* GraphQL */ `
  subscription OnDeleteAdvert {
    onDeleteAdvert {
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
