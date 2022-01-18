using Streamish.Models;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetByIdWithVideos(int id);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        void Add(UserProfile userProfile);
    }
}