import React from "react";

export default function Weather() {
  return (
    <div className="weather">
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              class="card-img-bottom"
              alt="sky"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
