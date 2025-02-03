<div className="main-topics-container">
  <main className="topics-content">
    <div className="user-info">
      <FontAwesomeIcon icon={faBell} className="bell-icon" />
      <Avatar name="Alice" round={true} size="50" color="#0a6476" />
    </div>

    <h1 className="topics-header">IBM COURSES</h1>

    {/* Search Bar */}
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search topics..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

    {/* Filter Buttons */}
    <div className="filter-buttons">
      <button onClick={() => handleFilterChange("")}>All</button>
      <button onClick={() => handleFilterChange("Non-Technical")}>
        Non-Technical
      </button>
      <button onClick={() => handleFilterChange("Technical")}>Technical</button>
    </div>

    {/* Filtered Topics Display */}
    <div className="topics-container">
      {filteredTopics.length === 0 ? (
        <div className="no-posts-message">No Posts Yet</div>
      ) : (
        <div className="topics-grid">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="topic-card"
              onClick={() => handleCardClick(topic.title)}
              style={{
                cursor: topic.title === "IBM Capstone" ? "pointer" : "default",
              }}
            >
              {topic.image && (
                <img src={topic.image} alt="Topic" className="topic-image" />
              )}
              <h2>{topic.title}</h2>
              <p>{topic.content}</p>
              <span className={`category-label ${topic.category}`}>
                {topic.category}
              </span>

              <div className="actions">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(topic.id);
                  }}
                >
                  <FaThumbsUp /> {likes[topic.id] || 0} Likes
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExpandTopic(topic);
                  }}
                >
                  <FaComments /> {comments[topic.id]?.length || 0} Comments
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </main>
</div>;
