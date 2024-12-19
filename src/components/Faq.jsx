const Faq = () => {
  return (
    <div className="container mx-auto  my-20">
      <h2 className="text-center font-bold text-2xl ">Movie Portal FAQ</h2>

      <div className="collapse collapse-plus bg-base-100 mt-10">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How can I sign up for the Movie Portal?
        </div>
        <div className="collapse-content">
          <p>
            To sign up, click on the "Sign Up" button at the top right corner of
            the homepage and fill in the registration form.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I add a new movie?
        </div>
        <div className="collapse-content">
          <p>
            To add a new movie, log in to your account and navigate to the "Add
            Movie" page. Fill out the required fields and click on the "Submit"
            button.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I update movie details after adding them?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can. Navigate to the movie details page and click the
            "Update Movie" button. You will be redirected to the update form
            where you can edit the details.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I view all movies available on the portal?
        </div>
        <div className="collapse-content">
          <p>
            Go to the "All Movies" page from the main menu to browse the
            complete list of movies available on the portal.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What should I do if I face issues using the portal?
        </div>
        <div className="collapse-content">
          <p>
            If you encounter any issues, please contact our support team at
            support@movieportal.com or visit the "Contact Us" page for more
            assistance.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Is the Movie Portal free to use?
        </div>
        <div className="collapse-content">
          <p>
            Yes, the portal is free for browsing and adding movies. However,
            premium features such as advanced analytics or ad-free browsing
            might require a subscription.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I delete a movie from the portal?
        </div>
        <div className="collapse-content">
          <p>
            Only admin users have the permission to delete movies. If you
            believe a movie should be removed, please contact support with your
            request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
