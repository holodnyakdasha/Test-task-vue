<template>
  <div class="container">
    <div v-if="!isFormAccept" class="form-container">
      <form @submit="checkForm">
        <div class="form-field">
          <label for="name">Name<i class="fa fa-asterisk"></i> :</label>
          <input
            v-model.lazy="formData.name.value"
            placeholder="Write your name..."
            type="text"
            name="name"
            id="name"
            @change="checkField($event, 'checkTextOnly')"
          />
          <span
            v-if="formData.name.error.value"
            class="error"
          > {{ formData.name.error.text }}</span>
        </div>

        <div class="form-field">
          <label for="name">Surname<i class="fa fa-asterisk"></i> :</label>
          <input
            v-model.lazy="formData.surname.value"
            placeholder="Write your surname..."
            type="text"
            name="surname"
            id="surname"
            @change="checkField($event, 'checkTextOnly')"
          />
          <span
            v-if="formData.surname.error.value"
            class="error"
          > {{ formData.surname.error.text }}</span>
        </div>

        <div class="form-field">
          <label for="name">Email<i class="fa fa-asterisk"></i> :</label>
          <input
            v-model.lazy="formData.email.value"
            placeholder="Write your email..."
            type="text"
            name="email"
            id="email"
            @change="checkField($event, 'checkEmail')"
          />
          <span
            v-if="formData.email.error.value"
            class="error"
          > {{ formData.email.error.text }}</span>
        </div>

        <div class="form-field">
          <label for="name">Phone<i class="fa fa-asterisk"></i> :</label>
          <input
            v-model.lazy="formData.phone.value"
            placeholder="Write your phone..."
            type="text"
            name="phone"
            id="phone"
            @change="checkField($event, 'checkPhoneNumber')"
          />
          <span
            v-if="formData.phone.error.value"
            class="error"
          > {{ formData.phone.error.text }}</span>
        </div>

        <div class="form-field">
          <label for="name">Password<i class="fa fa-asterisk"></i> :</label>
          <input
            v-model.lazy="formData.password.value"
            placeholder="Write your password..."
            type="password"
            name="password"
            id="password"
            @change="checkField($event, 'checkPassword')"
          />
          <span
            v-if="formData.password.error.value"
            class="error"
          > {{ formData.password.error.text }}</span>
        </div>

        <div class="form-field">
          <input type="submit" value="Submit" class="submit-button" />
        </div>
      </form>
    </div>
    <div v-else class="form-sent-text">
      Form successfully sent
    </div>
  </div>
</template>

<script>
import {
  checkTextOnly,
  checkPassword,
  checkPhoneNumber,
  checkEmail,
  checkEmptyField
} from '../validators/formValidator';

export default {
  name: "ValidationForm",
  data() {
    return {
      formData: {
        name: { value: '', error: { value: false, text: '' } },
        surname: { value: '', error: { value: false, text: '' } },
        email: { value: '', error: { value: false, text: '' } },
        phone: { value: '', error: { value: false, text: '' } },
        password: { value: '', error: { value: false, text: '' } },
      },

      isFormAccept: false,
    }
  },

  methods: {
    checkForm(e) {
      e.preventDefault();
      const fields = [...e.target]
      const validationResult = [];
      fields.forEach(field => {
        const res = checkEmptyField(field.value);

        if (res && res.message) {
          this.addErrorMessageToFormField(field.name, res.message);
          validationResult.push(false);
        }

        if (field.name && this.formData[field.name].error.value) {
          validationResult.push(false);
        }

      })
      
      if (!validationResult.includes(false)) {
        this.isFormAccept = true;
      }

    },

    checkField(event, method) {
      const validators = [checkTextOnly, checkPassword, checkPhoneNumber, checkEmail, checkEmptyField ];
      const validator = validators.find(item => item.name === method)

      const res = validator(this.formData[event.target.name].value);

      if (res && res.message) {
        return this.addErrorMessageToFormField(event.target.name, res.message);
      }

      return this.removeErrorMessageFromFormField(event.target.name);
    },

    addErrorMessageToFormField(fieldName, message) {
      this.formData[fieldName].error = { value: true, text: message};
    },

    removeErrorMessageFromFormField(fieldName) {
      this.formData[fieldName].error = { value: false, text: ''};
    }
  },
}
</script>