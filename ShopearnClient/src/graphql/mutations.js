/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createAdvert = /* GraphQL */ `
  mutation CreateAdvert(
    $input: CreateAdvertInput!
    $condition: ModelAdvertConditionInput
  ) {
    createAdvert(input: $input, condition: $condition) {
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
export const updateAdvert = /* GraphQL */ `
  mutation UpdateAdvert(
    $input: UpdateAdvertInput!
    $condition: ModelAdvertConditionInput
  ) {
    updateAdvert(input: $input, condition: $condition) {
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
export const deleteAdvert = /* GraphQL */ `
  mutation DeleteAdvert(
    $input: DeleteAdvertInput!
    $condition: ModelAdvertConditionInput
  ) {
    deleteAdvert(input: $input, condition: $condition) {
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
