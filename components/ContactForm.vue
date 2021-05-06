<template>
  <div class="contact-form-section section-padding-t90-b100"
       :style="{ backgroundColor: '#f8faff' }">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8">
          <div class="section-title text-center"
               data-aos="fade-up">
            <h2 class="title fz-32">
              Let's talk about your project
            </h2>
            <p class="sub-title">
              We have made it easy for clients to reach us and get
              their solutions weaved
            </p>
          </div>
          <div class="contact-form">
            <form>
              <div class="row mtn-30">
                <div class="col-md-6 col-12 mt-30">
                  <input type="text"
                         placeholder="稱呼 *"
                         name="name" />
                </div>
                <div class="col-md-6 col-12 mt-30">
                  <input type="email"
                         placeholder="信箱 *"
                         name="email" />
                </div>
                <div class="col-md-12 col-12 mt-30">
                  <input type="text"
                         placeholder="主旨 *"
                         name="subject" />
                </div>
                <div class="col-12 mt-30">
                  <textarea name="message"
                            placeholder="訊息"></textarea>
                </div>
                <div class="col-12 text-center mt-30">
                  <button class="btn btn-primary btn-hover-secondary">
                    送出
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact-Form"
    };
  }
};
</script>
