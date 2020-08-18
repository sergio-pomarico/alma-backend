class UserServices {
  message = 'Hello World!';

  index(): { message: string } {
    return {
      message: this.message
    };
  }
}

export default UserServices;
